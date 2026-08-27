export const Cloud = ({ className = "", size = 180 }) => (
    <svg
        width={size}
        height={size * 0.55}
        viewBox="0 0 180 100"
        fill="none"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
    >
        <path
            d="
        M35 78
        C15 78 7 65 12 51
        C16 39 28 33 40 36
        C43 18 58 7 76 10
        C91 12 101 22 104 36
        C108 30 116 27 125 29
        C138 31 146 42 145 54
        C163 53 173 63 170 75
        C168 86 157 91 144 91
        H35
        Z
      "
            fill="white"
            stroke="#E6E6E6"
            strokeWidth="3"
        />
    </svg>
);

export const Star = ({ className = "", size = 40, color = "#FF1744", }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
    >
        <path
            d="
        M25 3
        L29.8 19.2
        L47 19.5
        L33.2 29.6
        L37.5 46
        L25 36.4
        L12.5 46
        L16.8 29.6
        L3 19.5
        L20.2 19.2
        Z
      "
            fill={color}
        />
    </svg>
);

export const Sun = ({ className = "" }) => (
    <svg
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
    >
        <circle cx="55" cy="55" r="25" fill="#FFD43B" />

        <path
            d="
        M55 4V20
        M55 90V106
        M4 55H20
        M90 55H106
        M19 19L31 31
        M79 79L91 91
        M91 19L79 31
        M31 79L19 91
      "
            stroke="#FFD43B"
            strokeWidth="7"
            strokeLinecap="round"
        />
    </svg>
);

export const Balloon = ({ className = "", color = "#FF1744", }) => (
    <svg
        width="65"
        height="100"
        viewBox="0 0 65 100"
        fill="none"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
    >
        <path
            d="
        M32.5 66
        C49 66 58 51 58 34
        C58 17 47 5 32.5 5
        C18 5 7 17 7 34
        C7 51 16 66 32.5 66Z
      "
            fill={color}
        />

        <path
            d="M27 66L32.5 75L38 66"
            fill={color}
        />

        <path
            d="M32.5 75C32.5 82 31 88 34 96"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
        />

        <path
            d="M21 17C15 24 15 35 19 41"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            opacity=".7"
        />
    </svg>
);