export default function Wordmark({ className = '', as: Tag = 'span', ...rest }) {
  return (
    <Tag className={`wordmark ${className}`} {...rest}>
      MUSE<span className="dot">.</span>
    </Tag>
  )
}
