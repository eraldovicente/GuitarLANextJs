import Layout from "@/components/layout";
import Image from "next/image";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, GuitarLA, tienda de música"
    >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, justo non euismod mattis, libero eros consectetur justo, vel dictum nunc ligula sed sem. Sed dictum felis vel odio volutpat imperdiet. Suspendisse diam est, mollis et fringilla a, feugiat sed diam. Mauris velit nisi, ultricies venenatis velit ut, consequat aliquam ligula. Aliquam finibus neque vel iaculis ultrices.</p>

              <p>Vestibulum vel nibh efficitur, porttitor tellus ut, scelerisque mi. Aenean at rutrum sem. Nam lacinia, nunc ut congue ullamcorper, sem est efficitur dolor, nec tempor tortor risus pellentesque dolor. Etiam id porttitor leo, ac ultricies dui. Morbi vel ligula scelerisque quam ultrices rutrum. Proin hendrerit dictum urna, accumsan cursus mi semper et.</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}
