import { connect } from "@/Database/db";
import Blog from "@/models/blog";
import { uploadToR2 } from "@/utils/uploadToR2";
import { deleteFromR2 } from "@/utils/deleteFromR2";

// GET /api/blog/:id
export async function GET(_req, { params }) {
  const { id } = await params;
  await connect();
  const blog = await Blog.findById(id);
  if (!blog) return new Response("Not found", { status: 404 });
  return new Response(JSON.stringify(blog), { status: 200 });
}

// PUT /api/blog/:id
export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    await connect();

    const formData = await req.formData();

    const data = {
      title: formData.get("title"),
      date: formData.get("date"),
      permalink: formData.get("permalink"),
      content: formData.get("content"),
      metaTitle: formData.get("metaTitle"),
      metaDescription: formData.get("metaDescription"),
    };

    const newFile = formData.get("image");

    const existing = await Blog.findById(id);
    if (!existing) return new Response("Not found", { status: 404 });

    // 🔁 If new image uploaded
    if (newFile && newFile.name) {
      // ✅ DELETE OLD IMAGE
      if (existing.imageFileId) {
        await deleteFromR2(existing.imageFileId);
      }

      // ⬆ UPLOAD NEW IMAGE
      const bytes = await newFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${newFile.name}`;

      // upload to R2
      const uploadedImage = await uploadToR2({
        file: buffer,
        folder: "anypro",
        fileName,
        contentType: newFile.type,
      });

      data.image = uploadedImage.url;
      data.imageFileId = uploadedImage.key; // ✅ FULL PATH
    }

    const updated = await Blog.findByIdAndUpdate(id, data, { new: true });
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    console.error("PUT /api/blog/:id error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

// DELETE /api/blog/:id
export async function DELETE(_req, { params }) {
  try {
    const { id } = await params;
    await connect();

    const blog = await Blog.findById(id);

    if (!blog) {
      return Response.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    // Delete image from R2
    if (blog.imageFileId) {
      await deleteFromR2(blog.imageFileId);
    }

    // Delete blog from database
    await Blog.findByIdAndDelete(id);

    return Response.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );

  } catch (err) {
    console.error("DELETE /api/blog/:id error:", err);

    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
