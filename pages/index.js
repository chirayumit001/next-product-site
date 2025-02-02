import Layout from "../components/layout/layout"
import Container from "@mui/material/Container"
import Feature from "../components/Feature"
import CustomerSupport from "../components/CustomerSupport"
import Hero from "../components/Hero"
export default function Home() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Hero />
        <Feature />
        <CustomerSupport />
      </Container>
    </Layout>
  )
}
