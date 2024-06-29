import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import presetEnv from 'postcss-preset-env'

export default {
    syntax: 'postcss-scss',
    plugins: [
        tailwindcss,
        autoprefixer,
        presetEnv({
            stage: 1,
            autoprefixer: {
                grid: true,
                flexbox: 'no-2009',
            },
        }),
    ],
}
