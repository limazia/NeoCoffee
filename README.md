# NeoCoffee
O NeoCoffee é um sistema de cardápio simples utilizando React e TypeScript. Ele permite a criação e visualização de um cardápio de forma rápida e eficiente.

![NeoCoffee Preview](https://i.imgur.com/4afATHR.png)

## Configuração
Para configurar as categorias e os produtos, utilize a estrutura de dados apresentada abaixo como referência:

```bash
const myProducts: MenuCategory[] = [
  {
    category: string,
    products: [
      {
        name: string,
        price: number,
        description: string,
      },
    ],
  },
];
```

## Instalação
Para executar o NeoCoffee localmente em seu ambiente de desenvolvimento, siga os passos abaixo:

```bash
git clone https://github.com/limazia/NeoCoffee.git
npm i
npm run dev
```

Obrigado a [Rocketseat](https://www.rocketseat.com.br/)

## License
MIT
