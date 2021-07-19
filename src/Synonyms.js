import React from "react";

export default function Synonyms(props) {
 if (props.synonyms) {
   return (
    <div>
     <p className="Synonyms">
       {props.synonyms.map(function(synonym, index) {
         return (
           <li key={index}>
             {synonym}
           </li>
         );
       })}
     </p>
     </div>
   );
 } else {
   return null;
 }
}