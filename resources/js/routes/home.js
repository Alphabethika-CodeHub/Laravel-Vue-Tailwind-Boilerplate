const Home = () => import('../components/Home.vue')
const Header = () => import('../components/Header.vue')
const Footer = () => import('../components/Footer.vue')

export default [
    {
        path: '/',
        components: {
            content: Home,
            header: Header,
            footer: Footer
        },
    },
]
