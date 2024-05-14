import React from "react";
import { ProductCard } from "../../components/productCard";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shopPage">
      <div className="shopHeader">
        <h1>Aktualny asortyment</h1>
      </div>
      <div className="productsContainer">
        <div className="kinderDeliceCard">
          <ProductCard
            productId={1}
            image="/kinderDelice.jpg?url"
            title="Kinder Delice"
            description="Kinder Delice to przekąska, która spełnia wymagania mamy i oczekiwania dziecka. Tworzą go starannie dobrane, naturalne składniki: mleko, mąka, jaja i kakao. Kinder Delice to puszysty biszkopt z pysznym mleczno-kakaowym nadzieniem, który dzieci uwielbiają za wyjątkowy smak, a rodzice cenią za wartości odżywcze."
            price="3.30"
          />
        </div>
        <div className="kinderMaxiKingCard">
          <ProductCard
            productId={2}
            image="/kinderMaxiKing.jpg?url"
            title="Kinder Maxi King"
            description="Kinder Maxi King to unikalny baton prosto z lodówki. To puszyste mleczne nadzienie z płynnym karmelem w delikatnym wafelku oblanym czekoladą z chrupiącymi kawałkami orzechów."
            price="7.21"
          />
        </div>
        <div className="kinderSurpriseCard">
          <ProductCard
            productId={3}
            image="/kinderSurprise.jpg?url"
            title="Kinder Niespodzianka"
            description="Kinder Niespodzianka to jajko z niespodzianką, pokryte pyszną czekoladą Kinder dostarczające dzieciom zabawy, rozrywki oraz emocji odkrywania."
            price="2.94"
          />
        </div>
      </div>
    </div>
  );
};
