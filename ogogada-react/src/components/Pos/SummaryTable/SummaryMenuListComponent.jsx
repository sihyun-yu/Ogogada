import React from "react";
import { Subscribe } from "unstated";
import { MenuStore } from "../../../stores/";
import "../../../stylesheets/SummaryMenuList.css";
import SummrayMenuItem from "./SummaryMenuItemComponent.jsx";
import SummrayTotal from "./SummaryTotalComponent.jsx";

const SummaryTableComponent = props => {
  const convertObjectToKeysAndSort = (object, sortCb) =>
    Object.keys(object).sort(sortCb);

  return (
    <Subscribe to={[MenuStore]}>
      {menuStore => (
        <div className="summary-menu">
          <div className="summary-menu__label-row">
            <div className="summary-menu__label menu-label">menu</div>
            <div className="summary-menu__label count-label">num</div>
            <div className="summary-menu__label price-label">price</div>
            <div className="summary-menu__label actual-label">actual</div>
          </div>
          <div className="summary-menu__list">
            {convertObjectToKeysAndSort(
              menuStore.state.selected,
              (a, b) => parseInt(a, 10) > parseInt(b, 10)
            ).map(id => (
              <SummrayMenuItem
                key={id}
                id={id}
                menu={menuStore.state.menus[id]}
                count={menuStore.state.selected[id]}
                handleIncrement={menuStore.addSelectedMenu.bind(menuStore, id)}
                handleDecrement={menuStore.decrementSelectedMenu.bind(
                  menuStore,
                  id
                )}
                handleDelete={menuStore.deleteSelectedMenu.bind(menuStore, id)}
              />
            ))}
          </div>
          <SummrayTotal label="상품가격 합계" />
        </div>
      )}
    </Subscribe>
  );
};

export default SummaryTableComponent;
