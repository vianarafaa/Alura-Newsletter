tailwind.config = {
    theme: {
        extend: {
            colors: {
                azul: {
                    claro: '#C5DFFF',
                    escuro: '#061E3C',
                    hover: '#1057B0',
                },
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            keyframes: {
                shake_kf: {
                    '0%, 100%': {
                        transform: 'rotate(-10deg)',
                    },
                    '50%': {
                        transform: 'rotate(10deg)',
                    },
                },
            },
            animation: {
                shake: 'shake_kf 0.31s ease-in-out infinite',
            },
        },
    },
};
