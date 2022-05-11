import React from "react";
import "./Middlecomponet.css";
// import {} from 'react-icons/fa';
// import { AiOutlineFileAdd,AiOutlineFileDone,FiLogIn,BiSupport  } 
// import { BiSupport } from "@react-icons/all-files/fa/BiSupport";
// import { FiLogIn } from "@react-icons/all-files/fa/FiLogIn";
// import { AiOutlineFileDone } from "@react-icons/all-files/fa/AiOutlineFileDone";
// import { AiOutlineFileAdd } from "@react-icons/all-files/fa/AiOutlineFileAdd";

export default function Middlecomponent() {
  return (
    <div className="containermiddle">
      <div className="topsection">
        <div>
          <img
            className="customercare"
            src="https://valacc.com/wp-content/uploads/2019/10/customer-service-girl-png-1.png"
          />
        </div>
        <div className="coustemertext">
          <div>
            <h1 className="coustomertext1">Chat with an Agent</h1>
          </div>
          <div>
            <p>
              {" "}
              The best way contact us is to use the chat feachere in rhe lower
              ringht hand corner(We offer 24 X 7 service)
            </p>
          </div>
        </div>
      </div>
      <div className="middlesection">
        <div>
          <h1 className="miggleSectionh1 line">Use Self-Help Tools</h1>
        </div>
        <div>
          <p>
            To Save Time Use any of These Tools Below to guide yourself through
            the entite Visa Process
          </p>
        </div>

        <div className="endsection">
            <div className="box">
               <div>
                   
                   <h5> Start A new Application</h5>
               </div>
            </div>

            <div className="box">
            <div>
                   <h5> Check Order Status</h5>
               </div>
            </div>

            <div className="box">
            <div>
                   <h5> Login to My Account </h5>
               </div>
            </div>
            <div className="box">
            <div>
                   <h5>Support</h5>
               </div>
            </div>

        </div>


      </div>
    </div>
  );
}
