/*
 * @Author: your name
 * @Date: 2021-01-12 09:38:09
 * @LastEditTime: 2021-03-17 10:48:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-element-admin\src\utils\index.js
 */
/**
 * @description:树形结构转一维数组
 * @param {*} nodes
 * @return {*}
 */
export function jsonToArray(nodes) {
    let pid = -1;
    const toArray = nodes => {
        let r = [];
        if (Array.isArray(nodes)) {
            for (let i = 0, l = nodes.length; i < l; i++) {
                nodes[i].pid = pid;
                r.push(nodes[i]); // 取每项数据放入一个新数组
                if (
                    Array.isArray(nodes[i]["children"]) &&
                    nodes[i]["children"].length > 0
                ) {
                    // 若存在children则递归调用，把数据拼接到新数组中，并且删除该children
                    pid = nodes[i].id;
                    r = r.concat(toArray(nodes[i]["children"]));
                    delete nodes[i]["children"];
                }
            }
        }
        return r;
    };
    return toArray(nodes);
}

/**
 * @description:一维数组转树形结构
 * @param {*} treeArray
 * @return {*}
 */
export function arrayToJson(treeArray) {
    var r = [];
    var tmpMap = {};
    for (var i = 0, l = treeArray.length; i < l; i++) {
        //* 以每条数据的id作为obj的key值，数据作为value值存入到一个临时对象里面
        tmpMap[treeArray[i]["id"]] = treeArray[i];
    }
    for (i = 0, l = treeArray.length; i < l; i++) {
        var key = tmpMap[treeArray[i]["pid"]];
        //*循环每一条数据的pid，假如这个临时对象有这个key值，就代表这个key对应的数据有children，需要Push进去
        //*如果这一项数据属于哪个数据的子级
        if (key) {
            // *如果这个数据没有children
            if (!key["children"]) {
                key["children"] = [];
                key["children"].push(treeArray[i]);
                //* 如果这个数据有children
            } else {
                key["children"].push(treeArray[i]);
            }
        } else {
            //*如果没有这个Key值，就代表找不到属于哪个数据，那就代表没有父级,直接放在最外层
            r.push(treeArray[i]);
        }
    }
    return r;
}

/**
 * @description 获取节点的所有父节点
 * @param {*} tree
 * @param {*} func
 * @param {*} path
 * @return {*}
 */
export const treeFindPath = (tree, func, name = "id", path = []) => {
    if (!tree) return [];
    for (const data of tree) {
        //* 这里按照你的需求来存放最后返回的内容吧
        path.push(data[name]);
        if (func(data)) return path;
        if (data.children) {
            const findChildren = treeFindPath(data.children, func, name, path);
            if (findChildren.length) return findChildren;
        }
        path.pop();
    }
    return [];
};

/**
 * @description: 拆箱函数,解决tooltip显示问题
 * @param {*} obj
 * @return {*}
 */
export const unwarp = obj => obj && (obj.__v_raw || obj.valueOf() || obj);
export const icons = [
    "el-icon-platform-eleme",
    "el-icon-eleme",
    "el-icon-delete-solid",
    "el-icon-delete",
    "el-icon-s-tools",
    "el-icon-setting",
    "el-icon-user-solid",
    "el-icon-user",
    "el-icon-phone",
    "el-icon-phone-outline",
    "el-icon-more",
    "el-icon-more-outline",
    "el-icon-star-on",
    "el-icon-star-off",
    "el-icon-s-goods",
    "el-icon-goods",
    "el-icon-warning",
    "el-icon-warning-outline",
    "el-icon-question",
    "el-icon-info",
    "el-icon-remove",
    "el-icon-circle-plus",
    "el-icon-success",
    "el-icon-error",
    "el-icon-zoom-in",
    "el-icon-zoom-out",
    "el-icon-remove-outline",
    "el-icon-circle-plus-outline",
    "el-icon-circle-check",
    "el-icon-circle-close",
    "el-icon-s-help",
    "el-icon-help",
    "el-icon-minus",
    "el-icon-plus",
    "el-icon-check",
    "el-icon-close",
    "el-icon-picture",
    "el-icon-picture-outline",
    "el-icon-picture-outline-round",
    "el-icon-upload",
    "el-icon-upload2",
    "el-icon-download",
    "el-icon-camera-solid",
    "el-icon-camera",
    "el-icon-video-camera-solid",
    "el-icon-video-camera",
    "el-icon-message-solid",
    "el-icon-bell",
    "el-icon-s-cooperation",
    "el-icon-s-order",
    "el-icon-s-platform",
    "el-icon-s-fold",
    "el-icon-s-unfold",
    "el-icon-s-operation",
    "el-icon-s-promotion",
    "el-icon-s-home",
    "el-icon-s-release",
    "el-icon-s-ticket",
    "el-icon-s-management",
    "el-icon-s-open",
    "el-icon-s-shop",
    "el-icon-s-marketing",
    "el-icon-s-flag",
    "el-icon-s-comment",
    "el-icon-s-finance",
    "el-icon-s-claim",
    "el-icon-s-custom",
    "el-icon-s-opportunity",
    "el-icon-s-data",
    "el-icon-s-check",
    "el-icon-s-grid",
    "el-icon-menu",
    "el-icon-share",
    "el-icon-d-caret",
    "el-icon-caret-left",
    "el-icon-caret-right",
    "el-icon-caret-bottom",
    "el-icon-caret-top",
    "el-icon-bottom-left",
    "el-icon-bottom-right",
    "el-icon-back",
    "el-icon-right",
    "el-icon-bottom",
    "el-icon-top",
    "el-icon-top-left",
    "el-icon-top-right",
    "el-icon-arrow-left",
    "el-icon-arrow-right",
    "el-icon-arrow-down",
    "el-icon-arrow-up",
    "el-icon-d-arrow-left",
    "el-icon-d-arrow-right",
    "el-icon-video-pause",
    "el-icon-video-play",
    "el-icon-refresh",
    "el-icon-refresh-right",
    "el-icon-refresh-left",
    "el-icon-finished",
    "el-icon-sort",
    "el-icon-sort-up",
    "el-icon-sort-down",
    "el-icon-rank",
    "el-icon-loading",
    "el-icon-view",
    "el-icon-c-scale-to-original",
    "el-icon-date",
    "el-icon-edit",
    "el-icon-edit-outline",
    "el-icon-folder",
    "el-icon-folder-opened",
    "el-icon-folder-add",
    "el-icon-folder-remove",
    "el-icon-folder-delete",
    "el-icon-folder-checked",
    "el-icon-tickets",
    "el-icon-document-remove",
    "el-icon-document-delete",
    "el-icon-document-copy",
    "el-icon-document-checked",
    "el-icon-document",
    "el-icon-document-add",
    "el-icon-printer",
    "el-icon-paperclip",
    "el-icon-takeaway-box",
    "el-icon-search",
    "el-icon-monitor",
    "el-icon-attract",
    "el-icon-mobile",
    "el-icon-scissors",
    "el-icon-umbrella",
    "el-icon-headset",
    "el-icon-brush",
    "el-icon-mouse",
    "el-icon-coordinate",
    "el-icon-magic-stick",
    "el-icon-reading",
    "el-icon-data-line",
    "el-icon-data-board",
    "el-icon-pie-chart",
    "el-icon-data-analysis",
    "el-icon-collection-tag",
    "el-icon-film",
    "el-icon-suitcase",
    "el-icon-suitcase-1",
    "el-icon-receiving",
    "el-icon-collection",
    "el-icon-files",
    "el-icon-notebook-1",
    "el-icon-notebook-2",
    "el-icon-toilet-paper",
    "el-icon-office-building",
    "el-icon-school",
    "el-icon-table-lamp",
    "el-icon-house",
    "el-icon-no-smoking",
    "el-icon-smoking",
    "el-icon-shopping-cart-full",
    "el-icon-shopping-cart-1",
    "el-icon-shopping-cart-2",
    "el-icon-shopping-bag-1",
    "el-icon-shopping-bag-2",
    "el-icon-sold-out",
    "el-icon-sell",
    "el-icon-present",
    "el-icon-box",
    "el-icon-bank-card",
    "el-icon-money",
    "el-icon-coin",
    "el-icon-wallet",
    "el-icon-discount",
    "el-icon-price-tag",
    "el-icon-news",
    "el-icon-guide",
    "el-icon-male",
    "el-icon-female",
    "el-icon-thumb",
    "el-icon-cpu",
    "el-icon-link",
    "el-icon-connection",
    "el-icon-open",
    "el-icon-turn-off",
    "el-icon-set-up",
    "el-icon-chat-round",
    "el-icon-chat-line-round",
    "el-icon-chat-square",
    "el-icon-chat-dot-round",
    "el-icon-chat-dot-square",
    "el-icon-chat-line-square",
    "el-icon-message",
    "el-icon-postcard",
    "el-icon-position",
    "el-icon-turn-off-microphone",
    "el-icon-microphone",
    "el-icon-close-notification",
    "el-icon-bangzhu",
    "el-icon-time",
    "el-icon-odometer",
    "el-icon-crop",
    "el-icon-aim",
    "el-icon-switch-button",
    "el-icon-full-screen",
    "el-icon-copy-document",
    "el-icon-mic",
    "el-icon-stopwatch",
    "el-icon-medal-1",
    "el-icon-medal",
    "el-icon-trophy",
    "el-icon-trophy-1",
    "el-icon-first-aid-kit",
    "el-icon-discover",
    "el-icon-place",
    "el-icon-location",
    "el-icon-location-outline",
    "el-icon-location-information",
    "el-icon-add-location",
    "el-icon-delete-location",
    "el-icon-map-location",
    "el-icon-alarm-clock",
    "el-icon-timer",
    "el-icon-watch-1",
    "el-icon-watch",
    "el-icon-lock",
    "el-icon-unlock",
    "el-icon-key",
    "el-icon-service",
    "el-icon-mobile-phone",
    "el-icon-bicycle",
    "el-icon-truck",
    "el-icon-ship",
    "el-icon-basketball",
    "el-icon-football",
    "el-icon-soccer",
    "el-icon-baseball",
    "el-icon-wind-power",
    "el-icon-light-rain",
    "el-icon-lightning",
    "el-icon-heavy-rain",
    "el-icon-sunrise",
    "el-icon-sunrise-1",
    "el-icon-sunset",
    "el-icon-sunny",
    "el-icon-cloudy",
    "el-icon-partly-cloudy",
    "el-icon-cloudy-and-sunny",
    "el-icon-moon",
    "el-icon-moon-night",
    "el-icon-dish",
    "el-icon-dish-1",
    "el-icon-food",
    "el-icon-chicken",
    "el-icon-fork-spoon",
    "el-icon-knife-fork",
    "el-icon-burger",
    "el-icon-tableware",
    "el-icon-sugar",
    "el-icon-dessert",
    "el-icon-ice-cream",
    "el-icon-hot-water",
    "el-icon-water-cup",
    "el-icon-coffee-cup",
    "el-icon-cold-drink",
    "el-icon-goblet",
    "el-icon-goblet-full",
    "el-icon-goblet-square",
    "el-icon-goblet-square-full",
    "el-icon-refrigerator",
    "el-icon-grape",
    "el-icon-watermelon",
    "el-icon-cherry",
    "el-icon-apple",
    "el-icon-pear",
    "el-icon-orange",
    "el-icon-coffee",
    "el-icon-ice-tea",
    "el-icon-ice-drink",
    "el-icon-milk-tea",
    "el-icon-potato-strips",
    "el-icon-lollipop",
    "el-icon-ice-cream-square",
    "el-icon-ice-cream-round"
];
