import Formtosend from "./Formtosend";

function GetFormData(props) {
  const NewFormData = (GetFormData) => {
    const getListFormData = {
      ...GetFormData,
      id: Math.random().toString(),
    };
    props.onAddUserData(getListFormData);
  };
  return (
    <div className="container flex flex-col">
      <Formtosend onSaveFormData={NewFormData} />
    </div>
  );
}
export default GetFormData;
