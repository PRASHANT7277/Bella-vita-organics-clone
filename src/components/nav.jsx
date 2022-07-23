import { Link } from "react-router-dom";

const links = [
  {
    to: "/products",
    title: "SHOP ALL"
  },
  {
    to: "/products",
    title: "NEW ARRIVALS"
  },
  {
    to: "/products",
    title: "BESTSELLERS"
  },
  {
    to: "/products",
    title: "SKIN CARE"
  },
  {
    to: "/",
    title: "HAIR CARE"
  },
  {
    to: "/",
    title: "BODY CARE"
  },
  {
    to: "/",
    title: "PERFUMES"
  },
  {
    to: "/",
    title: "COMBOS"
  },
  {
    to: "/",
    title: "BUILD A BOX"
  }
];



function Nav() {
  return (
  <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      {links.map((item) => (
        <Link
          to={item.to}
          key={item.to}
        >
          <button style={{borderRight:"2px solid lightgrey",paddingRight:"0.8rem",}}>{item.title}</button>
        </Link>
      ))}
    </div>
  );
}

export default Nav;
