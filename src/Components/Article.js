import "./Article.css";

export default function Article() {
  return (
    <div className="ArticleStyles">
      <h2>Lorem Ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla,
        sapien ac volutpat bibendum, elit massa sagittis sapien, eget dignissim
        risus risus vel mauris. Aenean aliquet ultrices finibus. Fusce bibendum
        mauris erat, eget interdum dolor sagittis ac. Mauris gravida dolor eu
        nisl vestibulum ultrices. Sed tempus tristique pellentesque. Quisque id
        quam purus. Cras cursus quam nulla, et tempor nibh consequat id.
        Phasellus sed elit quis orci iaculis fringilla.
      </p>
      <div className="btnStyle">
        <a href="https://www.google.es/">
          <button>Invest Now</button>
        </a>
      </div>
    </div>
  );
}
