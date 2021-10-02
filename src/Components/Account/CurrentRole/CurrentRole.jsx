const getRoleName = (role) => {
  switch (role) {
    case "1": {
      return "Buyer";
    }
    case "2": {
      return "Salesman";
    }
    case "3": {
      return "Admin";
    }
    case "4": {
      return "Provider";
    }
    case "5": {
      return "Bank";
    }
    case "6": {
      return "Shop";
    }
    default:
      return "Guest";
  }
};

export const CurrentRole = (props) => {
  return <p>Now you're in role {getRoleName(props.role)}</p>;
};
