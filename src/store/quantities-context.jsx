import React, { useState, useEffect } from "react";

import { formatNumber } from "../utils/format-number";

/**
 * Sushi rice - 1:1.1 ratio
 * Long grain white rice - 1:1.75 ratio
 * Medium grain white rice - 1:1.5 ratio
 * Short grain white rice - 1:1.5 ratio
 * Long grain brown rice - 1:2.25 ratio
 * Parboiled rice - 1:2 ratio
 * Basmati or Jasmine rice - 1:1.5
 * Quinoa - 1:2 ratio
 */

const RATIOS = {
    metric: {
        rice: 150,
        riceVinegar: 27,
        sugar: 5,
        salt: 2
    },
    cups: {
        rice: 0.7,
        riceVinegar: 1.8,
        sugar: 0.4,
        salt: 0.4
    },
    water: {
        "sushi": 1.1,
        "long-grain-white": 1.75,
        "medium-grain-white": 1.5,
        "short-grain-white": 1.5,
        "long-grain-brown": 2.25,
        "parboiled": 1.2,
        "basmati": 1.5,
        "jasmine": 1.5,
        "quinoa": 1.2,
    }
};

export const QuantitiesContext = React.createContext();

const QuantitiesContextProvider = ({children}) => {
    const [quantities, setQuantities] = useState({
        rice: 0,
        water: 0,
        riceVinegar: 0,
        sugar: 0,
        salt: 0
    });

    const [parameters, setParameters] = useState({
        people: 1,
        riceType: "sushi",
        units: "metric",
        riceQuantity: null
    });

    const [isRiceInputMaster, setIsRiceInputMaster] = useState(false);

    useEffect(() => {
        let newQuantities = {};

        if (!isRiceInputMaster) {
            newQuantities = {
                rice: parameters.people * RATIOS[parameters.units].rice,
                water: parameters.people * RATIOS[parameters.units].rice * RATIOS.water[parameters.riceType],
                riceVinegar: parameters.people * RATIOS[parameters.units].riceVinegar,
                sugar: parameters.people * RATIOS[parameters.units].sugar,
                salt: parameters.people * RATIOS[parameters.units].salt
            };
        } else {
            newQuantities = {
                rice: parameters.riceQuantity,
                water: parameters.riceQuantity * RATIOS.water[parameters.riceType] ,
                riceVinegar: (RATIOS[parameters.units].riceVinegar / RATIOS[parameters.units].rice) * parameters.riceQuantity,
                sugar: (RATIOS[parameters.units].sugar / RATIOS[parameters.units].rice) * parameters.riceQuantity,
                salt: (RATIOS[parameters.units].salt / RATIOS[parameters.units].rice) * parameters.riceQuantity
            }
        }

        setQuantities({
            rice: formatNumber(newQuantities.rice),
            water: formatNumber(newQuantities.water),
            riceVinegar: formatNumber(newQuantities.riceVinegar),
            sugar: formatNumber(newQuantities.sugar),
            salt: formatNumber(newQuantities.salt),
        })
    }, [parameters, parameters.riceQuantity, isRiceInputMaster])

    const values = {
        quantities,
        setQuantities,
        parameters,
        setParameters,
        setIsRiceInputMaster
    }

  return <QuantitiesContext.Provider value={values}>{children}</QuantitiesContext.Provider>
}

export default QuantitiesContextProvider