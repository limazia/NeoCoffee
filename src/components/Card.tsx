import { MenuCategory as CardProps } from "@utils/interfaces";

export function Card({ category = "", products = [] }: CardProps) {
  return (
    <section>
      <h2>{category}</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div className="d-flex flex-column w-100">
              <div className="d-flex justify-content-between">
                <h6 className="mb-0">{product.name}</h6>
                <small className="font-weight-bold">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </small>
              </div>
              <div className="d-block">
                <small className="text-muted">{product.description}</small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
