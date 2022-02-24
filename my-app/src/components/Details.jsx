import React, { Fragment, useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate  } from "react-router-dom";

import {
  StyledDetails,
  StyledDetailsLeft,
  StyledDetailsRight,
  Cuadro,
  Imgag,
} from "../Styles/StyledDetails.js";
import { getPetId } from "../Redux/Actions/index.js";
import { useParams } from "react-router";
import SimilarPets from "./SimilarPets.jsx";
import { getPetsSimilar } from '../Redux/Actions/index.js';
import {
  IoHeart,
  IoEgg,
  IoPaw,
  IoHourglass,
  IoSparkles,
  IoFitness,
  IoBonfire,
  IoBusiness,
} from "react-icons/io5";

const Details = () => {
  
  
  const pets = useSelector((state) => state.petsfilter);
  const dispatch = useDispatch();
  const Datos = useSelector((state) => state.petOne);
  let { id } = useParams();
  let id2 = window.location.pathname;
  id2 = id2.replace("/details/", "");

  
  useEffect(() => {
    if (pets) {
      dispatch(getPetsSimilar(Datos, pets));
    }
   
    if (!id) {
      dispatch(getPetId(id2));
     
    }
    else
    {
      dispatch(getPetId(id));
    }
   
  }, [dispatch]);

 

  return (
    
    <Fragment>
     
      <StyledDetails>
        {" "}
        {Datos.length ? (
          <>
            <StyledDetailsLeft>
              <Cuadro>
                <Imgag src={Datos[0].image} />
              </Cuadro>
            </StyledDetailsLeft>
            <StyledDetailsRight>
           
              <h3>{Datos[0].name}</h3>

              <h1>{Datos[0].description}</h1>
              <h2>
                <IoSparkles />
                Peso:
                <span>{Datos[0].weight} </span> 
              </h2>

              <h2>
                <IoHourglass />
                Edad:
                <span>{Datos[0].age.age} </span>
              </h2>

              <h2>
                <IoBonfire />
                Temperamento :<span> {Datos[0].temperament.temperament} </span>
              </h2>

              {/* <h2> <IoFitness/>Vaccines :</span></h2><h1>{Datos[0].vaccines} </h1> */}

              <h2>
                <IoEgg />
                Especie :<span> {Datos[0].species.specie} </span>
              </h2>

              <h2>
                <IoHeart />
                Estado :<span> {Datos[0].petStatus.status}</span>
              </h2>

              <h2>
                <IoBusiness />
                Refugio :<span> {Datos[0].shelter.name} </span>
              </h2>
            </StyledDetailsRight>
          </>
        ) : (
          <h1>Sin Datos</h1>
        )}{" "}
      </StyledDetails>
      
      <SimilarPets />
     
     
    </Fragment>

   
  );
};
export default Details;
