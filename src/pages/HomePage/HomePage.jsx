import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "@/store/appSlice";

function HomePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);

  useEffect(() => {
    dispatch(setLoading(true));
    console.log("isLoading", isLoading);
  }, [dispatch, isLoading]);

  return (
    <div className="page">
      <section className="hero-section">
        <h1 className="hero-section__title">Ivo Folio</h1>
        <p className="hero-section__description">
          A simple portfolio website template.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
