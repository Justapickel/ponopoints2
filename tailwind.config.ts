import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        'sussy-forest': "url(https://www.prideofmaui.com/blog/wp-content/uploads/2017/01/Pools-of-Oheo_1-960x540.jpg)",
        'sussier-forest': "url(https://img.buzzfeed.com/buzzfeed-static/static/2020-12/2/21/asset/f9915c086cd5/sub-buzz-12484-1606943200-23.jpg)",
        'sussiest-forest': "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39cb06a2-39b2-4b54-8efa-c294fab1e52c/dduke3p-96d931b5-7a89-4589-a028-392fa8fa2517.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5Y2IwNmEyLTM5YjItNGI1NC04ZWZhLWMyOTRmYWIxZTUyY1wvZGR1a2UzcC05NmQ5MzFiNS03YTg5LTQ1ODktYTAyOC0zOTJmYThmYTI1MTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WP60v66BIRQtBi9ItgGQaAlmfonpvjj6MXpOZB4SdfM)",
        'sussiester-forest': "url(https://i.kym-cdn.com/entries/icons/original/000/041/943/1aa1blank.png)"
      }
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
