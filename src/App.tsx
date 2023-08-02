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
        name: "Coca-Cola",
        price: 5.0,
        description: "Lata de refrigerante tradicional.",
      },
      {
        name: "Suco de Laranja",
        price: 7.0,
        description: "Suco natural de laranja (300ml).",
      },
    ],
  },
  {
    category: "Lanches",
    products: [
      {
        name: "Hambúrguer",
        price: 10.0,
        description: "Hambúrguer suculento com queijo e bacon.",
      },
      {
        name: "Sanduíche Vegetariano",
        price: 15.0,
        description: "Sanduíche com alface, tomate e queijo.",
      },
      {
        name: "X-Bacon",
        price: 20.0,
        description: "Delicioso x-bacon.",
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

export function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="pb-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
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
