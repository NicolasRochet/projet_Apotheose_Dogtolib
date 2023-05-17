import { useSelector } from "react-redux";

const useVeterinary = () => {
  const userprofil = useSelector((state) => state.user.profil);
  console.log("userprofil:", userprofil);

  const roleVeterinary = () => {
    const { role } = profil;
    return role !== "";
  };

  return { roleVeterinary };
};

export default useVeterinary;
