export default function Wordmark({
  className = "",
  as: Tag = "span",
  ...rest
}) {
  return (
    <Tag className={`wordmark ${className}`} {...rest}>
      UWillC<span className="dot">.</span>
    </Tag>
  );
}
