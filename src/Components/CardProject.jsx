import React from "react";

export default function CardProject({
  title,
  description,
  img,
  link,
  className,
  children,
}) {
  return (
    <div className={className}>
      <img
        src={img}
        alt={title}
        className="aspect-3/2 object-cover w-full rounded-lg"
      />
      <div className="">
        <h1 className="mb-2 text-2xl font-bold">{title}</h1>
        <p className="font-normal text-base text-gray-400">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
