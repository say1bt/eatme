const Button = ({ icon, label, value, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {icon}
      {value !== undefined && <span className="cart-value">{value}</span>}
      <span className="button-label">{label}</span>
    </button>
  );
};

export default Button;
