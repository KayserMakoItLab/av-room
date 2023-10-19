import "./controlPanel.css";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { MdFavorite } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi'
import { useState } from "react";
import SelectedElement from "./SelectedElement";

const ControlPanel = ({ open }) => {
    const [selectedElement, setSelectedElement] = useState({
      title: "",
      subTitle: "",
      status: 0,
      data: []
    });

  return (
    <div className="control-panel">
      <div>
        <div className="cp-header">Control Panel</div>
      </div>
      <div className="cp-main">
        <div
          className="cp-menu-icon"
          onClick={() =>
            setSelectedElement({
              title: "",
              subTitle: "",
              status: 0,
              data: [],
            })
          }
        >
          <AiFillHome />
        </div>
        <div className="cp-menu-icon">
          <MdFavorite />
        </div>
        <div
          className="cp-menu-icon"
          onClick={() =>
            setSelectedElement({
              title: selectedElement.subTitle ? selectedElement.title : "",
              subTitle: "",
              status: selectedElement.status - 1,
              data: [],
            })
          }
        >
          <BiArrowBack />
        </div>
        <div className="cp-menu-icon-close" onClick={() => open(false)}>
          <AiOutlineClose />
        </div>
      </div>
      {selectedElement.status === 0 ? (
        <div className="cp-room-options">
          <div className="cp-room-options-text">Covering</div>
          <div className="cp-room-options-text">Furniture</div>
          <div
            className="cp-room-options-text"
            onClick={() =>
              setSelectedElement({
                title: "Electrical Appliances",
                subTitle: "",
                status: 1,
                data: [],
              })
            }
          >
            Electrical Appliances
          </div>
          <div className="cp-room-options-text">Decor</div>
          <div className="cp-room-options-text">Misc</div>
          <div className="cp-room-options-text">Others</div>
        </div>
      ) : (
        <SelectedElement item={selectedElement} element={setSelectedElement} />
      )}
    </div>
  );
};

export default ControlPanel;