import Layout from "@/components/layout"
import Link from "../components/layout"

export default function Pagina404() {
  return (
    <Layout
        title="Página não encontrada"
    >
        <p className="error">Página não encontrada</p>     
        <Link href='/' className="error-enlace">
            Ir a Inicio
        </Link>   
    </Layout>
  )
}
