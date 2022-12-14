/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import PetProfile from "./PetProfile";
import { Collection } from "@aws-amplify/ui-react";
export default function Pets(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Pet,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Pets")}
    >
      {(item, index) => (
        <PetProfile
          pet={item}
          height="auto"
          width="auto"
          margin="2px 2px 2px 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PetProfile>
      )}
    </Collection>
  );
}
