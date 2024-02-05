import React from "react";
import "./footer.css";

const NftFooter = () => {
  return (
    <>
      <div className="footer">
        <div className="footerlines">
          <div className="line1">
            <p>Questions? Call 000-800-919-1694</p>

            <ul>
              <li>FaQ</li>
              <li>Help Center</li>
              <li>Acoount</li>
              <li>Media Centre</li>
            </ul>
          </div>
          {/*  */}
          <div className="line1">
            <ul>
              <li>FaQ</li>
              <li>Help Center</li>
              <li>Acoount</li>
              <li>Media Centre</li>
            </ul>
          </div>
          {/*  */}
          <div className="line1">
            <ul>
              <li>FaQ</li>
              <li>Help Center</li>
              <li>Acoount</li>
              <li>Media Centre</li>
            </ul>
          </div>
          {/*  */}
          <div className="line1"id="footrbtn">
            <ul>
              <li>
                <select name="" id="selectoptions">
                  <option value="english" selected>
                    ENGLISH
                  </option>
                  <option value="english">HINDHI</option>
                  <option value="english">TELUGU</option>
                </select>
              </li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default NftFooter;
