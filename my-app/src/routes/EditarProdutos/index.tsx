import { useEffect } from "react";
import { useParams } from "react-router";

export default function EditarProdutos() {

  const { id } = useParams<{ id: string }>();

  useEffect(() => {

    const carregaProduto = async () => {
      try {

        const response = await fetch(`http://localhost:3001/produtos/${id}`);

        if (!response.ok) {
          throw new Error(`Falha na requisição dos produtos... ${response.status} - ${response.statusText}`);
        }

        const data: TipoProduto[] = await response.json();
        console.log(data);
        setProdutos(data); //Atualizando a lista de produtos
        //setProdutos(data); //Atualizando a lista de produtos

      } catch (error) {
        console.error(error);
      }
    }

    carregaProdutos();

  }, [])

  return (
    <main>
      <h2>Editar Produtos</h2>

    </main>
  )
}