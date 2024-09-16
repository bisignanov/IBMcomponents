import{j as m}from"./settings-RejM0MIl.js";import{R as d,r as w}from"./index-BwDkhjyp.js";import{a as i}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as g,a as j,m as A,u as h}from"./_storybook-styles-hqeZEaTI.js";import{S as z}from"./StoryDocsPage-BancPg4y.js";import{D as b}from"./DatagridActions-6JtThBev.js";import{D}from"./DatagridPagination-CXBC6uFG.js";import{A as o}from"./getArgTypes-CUsKgYxs.js";import{u as k}from"./useActionsColumn-eXPTRlJu.js";import{u as f}from"./useStickyColumn-15YIrejq.js";import{u as N}from"./useSelectRows-DZZNtN6W.js";import{a as I}from"./bucket-6-W_rBHQkv.js";import{T as M}from"./bucket-16-WQgD5HPz.js";import{C as G}from"./events-C3mJejkM.js";import{A as u}from"./bucket-0-BcfJCBD4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./floating-ui.react-DMp4y4mM.js";import"./index-BONylQH5.js";import"./index-CzgULgXp.js";import"./v4-CQkTLCs1.js";import"./devtools-DM-SaWXd.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./TableRow-D4GAcehC.js";import"./wrapComponent-DLIMH2gw.js";import"./TableToolbar-9XeADowj.js";import"./Text-DgK8TUAU.js";import"./ErrorEmptyState-DOJ8VJfr.js";import"./Link-Gytx0Oe9.js";import"./EmptyState-aQnJzl0Z.js";import"./props-helper-MxF4Ec7y.js";import"./EmptyStateV2-YlwqH6eK.js";import"./iframe-Cx6l2hzy.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-DHlDif52.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-NazM2k-l.js";import"./NoDataIllustration-CafjfHFp.js";import"./NotFoundEmptyState-MQ8gTPfT.js";import"./NotFoundIllustration-HJPYCFYl.js";import"./index.esm-CDTvvzq5.js";import"./usePreviousValue-DDnp_zt4.js";import"./extends-CCbyfPlC.js";import"./index-BvMpw_97.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./useResizeObserver-CYrpFlRY.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./useWindowResize-DwFaXXYX.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-JDAsPBX5.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-DEiA5Ca6.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-Ca1ApQ7o.js";import"./Search-CQpZNba5.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-Cn0Kqmaq.js";import"./index-DzDmuWYl.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-BNPDKGvd.js";import"./ButtonSet-BBETHK0Z.js";import"./InlineLoading-MFTaEf7Q.js";import"./Checkbox-BxJ5c5CY.js";import"./bucket-18-B1hZKqJv.js";import"./DatePicker-DZDWU3MO.js";import"./bucket-1-BLq-QJNX.js";import"./Dropdown-0xEPvOFl.js";import"./index-mxx-Mve7.js";import"./index-DcAOwtUU.js";import"./FormGroup-vcmiRT8k.js";import"./NumberInput-DaowFkqw.js";import"./useNormalizedInputProps-BOQjwhLP.js";import"./bucket-15-Xl1fzU6U.js";import"./RadioButton-DMRFpkTt.js";import"./RadioButtonGroup-B5IEXBc7.js";import"./MultiSelect-BBdaLlUW.js";import"./index-CfyPTyT-.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-C-3UtOfC.js";import"./Tag-BgY6Gmf7.js";import"./DefinitionTooltip-CgAlpbRh.js";import"./ComposedModal-BzqiIsg6.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-C8dDhlyb.js";import"./usePortalTarget-BvuJDQDm.js";import"./SkeletonText-CAZWEpYR.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-CmlJpOw_.js";import"./bucket-17-Ct9mOVQH.js";import"./story-helper-BJP0smTN.js";import"./index-CDqmW12E.js";import"./bucket-12-jEhP6zSm.js";import"./TableToolbarSearch-B5YNsK_y.js";import"./bucket-5-CkJxodIN.js";import"./bucket-13-Bb3ER_7z.js";import"./Select-CcTS5byt.js";import"./SelectItem-BuR0Rw27.js";import"./TableSelectRow-GWT-ldMa.js";const E=()=>m.jsx(z,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
const columns = [
  // other columns
  {
    Header: '',
    accessor: 'actions',
    isAction: true,
  },
];
const onActionClick = (actionId, row, event) => {};
const datagridState = useDatagrid(
  {
    columns,
    data,
    rowActions: [
      {
        id: 'edit',
        itemText: 'Edit',
        onClick: onActionClick,
      },
      {
        id: 'hidden',
        itemText: 'Hidden item',
        onClick: onActionClick,
        shouldHideMenuItem: () => true,
      },
      {
        id: 'delete',
        itemText: 'Delete',
        hasDivider: true,
        isDelete: true,
        onClick: onActionClick,
      },
    ],
  },
  useActionsColumn
);

return <Datagrid datagridState={datagridState} />;`}}]});E.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const te={title:"IBM Products/Components/Datagrid/RowActionButtons",component:g,tags:["autodocs"],parameters:{styles:j,docs:{page:E},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:(t,s)=>s,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],e={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:t=>{console.log("row size changed to: ",t)},rowActions:[{id:"edit",itemText:"Edit",icon:I,onClick:i("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:M,isDelete:!0,onClick:i("Clicked row action: delete"),align:"top-right"}]},U=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k);return m.jsx(g,{datagridState:l})},O=({...t})=>m.jsx(U,{defaultGridProps:{...t}}),W={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions},_="With row action buttons",a=O.bind({});a.storyName=_;a.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};a.args={...W};const F=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k);return m.jsx(g,{datagridState:l})},L=({...t})=>m.jsx(F,{defaultGridProps:{...t}}),V={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:I,onClick:i("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:G,onClick:i("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:M,isDelete:!0,hasDivider:!0,onClick:i("Clicked row action: delete")}]},Y="With many row action buttons",n=L.bind({});n.storyName=Y;n.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};n.args={...V};const q=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k,N);return m.jsx(g,{datagridState:l})},J=()=>[{label:"Duplicate",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:i("Clicked batch action button"),hasDivider:!0,kind:"danger"}],K=({...t})=>m.jsx(q,{defaultGridProps:{...t}}),Q={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions,toolbarBatchActions:J(),batchActions:!0},X="With row action buttons and batch actions",c=K.bind({});c.storyName=X;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};c.args={...Q};var T,C,y;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var x,B,R;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...(R=(B=n.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var H,v,P;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...(P=(v=c.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const oe=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{n as ManyRowActionButtonsUsageStory,c as RowActionButtonsBatchActionsUsageStory,a as RowActionButtonsUsageStory,oe as __namedExportsOrder,te as default};
