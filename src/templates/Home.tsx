import { motion } from "framer-motion";

import { Card } from "@components/Card";
import { Navbar } from "@components/Navbar";

import { renderRows } from "@utils/renderRows";
import { MenuCategory } from "@utils/interfaces";

const myProducts: MenuCategory[] = [
  {
    category: "Bebidas",
    products: [
      {
        name: "Suco de Laranja",
        price: 5.0,
        description: "Suco natural de laranja.",
      },
      {
        name: "Café Expresso",
        price: 3.5,
        description: "Café expresso bem quente.",
      },
      {
        name: "Refrigerante",
        price: 4.0,
        description: "Lata de refrigerante tradicional.",
      },
    ],
  },
  {
    category: "Lanches",
    products: [
      {
        name: "Hambúrguer",
        price: 12.5,
        description: "Hambúrguer suculento com queijo e bacon.",
      },
      {
        name: "Sanduíche Vegetariano",
        price: 10.0,
        description: "Sanduíche com alface, tomate e queijo.",
      },
      {
        name: "Batata Frita",
        price: 6.0,
        description: "Porção de batata frita crocante.",
      },
      {
        name: "Coxinha",
        price: 3.0,
        description: "Deliciosa coxinha de frango.",
      },
      {
        name: "Pastel",
        price: 5.0,
        description: "Pastel de carne ou queijo.",
      },
    ],
  },
  {
    category: "Sobremesas",
    products: [
      {
        name: "Sorvete de Chocolate",
        price: 8.0,
        description: "Sorvete cremoso de chocolate.",
      },
    ],
  },
];

export function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="pb-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} // Tempo de duração da animação em segundos
        >
          {renderRows({
            dataArray: myProducts,
            component: Card,
          })}
        </motion.div>
      </main>
    </>
  );
}
