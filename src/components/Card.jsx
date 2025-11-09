function Card(props) {
  return (
    <div
      className="max-h-[250px] max-w-[314px] lg:max-w-[350px] flex flex-col gap-8 p-8 bg-white drop-shadow-lg rounded-lg"
      style={{ borderTop: '4px solid', borderTopColor: props.color }}
    >
      <article aria-label={`${props.title} feature card`} className="flex flex-col gap-1.5 ">
        <h3 className="poppins-semibold text-xl/[135%] text-[#4D4F62]">
          {props.title}
        </h3>
        <p className="text-[15px]/[140%] text-[#6A7178]">{props.role}</p>
      </article>
      <div className="flex justify-end">
        <img src={props.img} alt="" className="size-16" />
      </div>
    </div>
  );
}

<div></div>;
export default Card;
