// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { ProductsProvider } from "./context/products_context.js";
// import { FilterProvider } from "./context/filter_context";
// import { CartProvider } from "./context/cart_context";
// import { UserProvider } from "./context/user_context";
// import { Auth0Provider } from "@auth0/auth0-react";
// import { TilesProvider } from "./context/tiles_context";
// import { TilesFilterProvider } from "./context/tiles_filter_context";
// import { SanitaryProvider } from "./context/sanitary_context";
// import { SanitaryFilterProvider } from "./context/sanitary_filter_context";
// import { WPGProvider } from "./context/wpg_context";
// import { WPGFilterProvider } from "./context/wpg_filter_context";
// import { MotorProvider } from "./context/motors_context";
// import { MotorFilterProvider } from "./context/motors_filter_context";
// import { ElectricalsProvider } from "./context/electricals_context";
// import { ElectricalsFilterProvider } from "./context/electricals_filter_context";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //dev-g7tbfj2lph2yzto5.us.auth0.com
// //EqxsXhG38BHSNow2trSdoDZMo0npjMmE
// root.render(
//   <Auth0Provider
//     domain="dev-g7tbfj2lph2yzto5.us.auth0.com"
//     clientId="Ce2qET1M3y7PGXzTQQx57D4SeH1sYwT6"
//     authorizationParams={{
//       redirect_uri: window.location.origin,
//     }}
//   >
//     <UserProvider>
//       <ProductsProvider>
//         <ElectricalsProvider>
//           <SanitaryProvider>
//             <MotorProvider>
//               <TilesProvider>
//                 <WPGProvider>
//                   <SanitaryFilterProvider>
//                     <ElectricalsFilterProvider>
//                       <MotorFilterProvider>
//                         <TilesFilterProvider>
//                           <WPGFilterProvider>
//                             <CartProvider>
//                               <App />
//                             </CartProvider>
//                           </WPGFilterProvider>
//                         </TilesFilterProvider>
//                       </MotorFilterProvider>
//                     </ElectricalsFilterProvider>
//                   </SanitaryFilterProvider>
//                 </WPGProvider>
//               </TilesProvider>
//             </MotorProvider>
//           </SanitaryProvider>
//         </ElectricalsProvider>
//       </ProductsProvider>
//     </UserProvider>
//   </Auth0Provider>
// );
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { Loading } from "./components";

// Lazy-loaded components
const ProductsProvider = lazy(() =>
  import("./context/products_context.js").then((module) => ({
    default: module.ProductsProvider,
  }))
);
const FilterProvider = lazy(() =>
  import("./context/filter_context").then((module) => ({
    default: module.FilterProvider,
  }))
);
const CartProvider = lazy(() =>
  import("./context/cart_context").then((module) => ({
    default: module.CartProvider,
  }))
);
const UserProvider = lazy(() =>
  import("./context/user_context").then((module) => ({
    default: module.UserProvider,
  }))
);
const TilesProvider = lazy(() =>
  import("./context/tiles_context").then((module) => ({
    default: module.TilesProvider,
  }))
);
const TilesFilterProvider = lazy(() =>
  import("./context/tiles_filter_context").then((module) => ({
    default: module.TilesFilterProvider,
  }))
);
const SanitaryProvider = lazy(() =>
  import("./context/sanitary_context").then((module) => ({
    default: module.SanitaryProvider,
  }))
);
const SanitaryFilterProvider = lazy(() =>
  import("./context/sanitary_filter_context").then((module) => ({
    default: module.SanitaryFilterProvider,
  }))
);
const WPGProvider = lazy(() =>
  import("./context/wpg_context").then((module) => ({
    default: module.WPGProvider,
  }))
);
const WPGFilterProvider = lazy(() =>
  import("./context/wpg_filter_context").then((module) => ({
    default: module.WPGFilterProvider,
  }))
);
const MotorProvider = lazy(() =>
  import("./context/motors_context").then((module) => ({
    default: module.MotorProvider,
  }))
);
const MotorFilterProvider = lazy(() =>
  import("./context/motors_filter_context").then((module) => ({
    default: module.MotorFilterProvider,
  }))
);
const ElectricalsProvider = lazy(() =>
  import("./context/electricals_context").then((module) => ({
    default: module.ElectricalsProvider,
  }))
);
const ElectricalsFilterProvider = lazy(() =>
  import("./context/electricals_filter_context").then((module) => ({
    default: module.ElectricalsFilterProvider,
  }))
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<Loading />}>
    <Auth0Provider
      domain="dev-g7tbfj2lph2yzto5.us.auth0.com"
      clientId="EqxsXhG38BHSNow2trSdoDZMo0npjMmE"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <ElectricalsProvider>
            <SanitaryProvider>
              <MotorProvider>
                <TilesProvider>
                  <WPGProvider>
                    <SanitaryFilterProvider>
                      <ElectricalsFilterProvider>
                        <MotorFilterProvider>
                          <TilesFilterProvider>
                            <WPGFilterProvider>
                              <CartProvider>
                                <App />
                              </CartProvider>
                            </WPGFilterProvider>
                          </TilesFilterProvider>
                        </MotorFilterProvider>
                      </ElectricalsFilterProvider>
                    </SanitaryFilterProvider>
                  </WPGProvider>
                </TilesProvider>
              </MotorProvider>
            </SanitaryProvider>
          </ElectricalsProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </Suspense>
);
