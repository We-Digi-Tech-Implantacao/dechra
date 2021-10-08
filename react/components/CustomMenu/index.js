import React, { useEffect } from 'react'
import './styles.css'

import { useCssHandles } from 'vtex.css-handles'
import { Link } from 'vtex.render-runtime'
import { useDevice } from 'vtex.device-detector'

const CSS_HANDLES = ['infoCard', 'menuItemContainer', 'customMenu', 'customMenuContainer', 'departmentItem', 'categoriesContainer', 'categoryItem', 'customSubMenuWrapper']

function Desktop({ data }) {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.customMenu}`}>
      {data.map(item =>
        <div className={`${handles.menuItemContainer}`}>
          <Link to={item?.link}>{item?.label}</Link>
          {item.hasChildren ?
            <div className={`${handles.customSubMenuWrapper}`}>
              <div className={`${handles.customMenuContainer}`}>
                {item?.children?.map(department =>
                  <div className={`${handles.departmentItem}`}>
                    <h2>
                      <Link to={department?.departmentLink}>{department?.departmentLabel}</Link>
                      <span>{department?.aditionalInfo}</span>
                    </h2>
                    <div className={`${handles.categoriesContainer}`}>
                      {department?.categories.map(category =>
                        <div className={`${handles.categoryItem}`}>
                          <strong>{category?.typeItems}</strong>
                          {category?.items.map(item =>
                            <Link to={item?.link}>{item?.label}</Link>)}
                        </div>)}
                    </div>
                  </div>)}
              </div>
              <div className={`${handles.infoCard}`} style={{ backgroundImage: `url("${item.infoCard.imageUrl}")` }}>
                <h3>{item.infoCard.title}</h3>
                <Link to={item.infoCard.button.link}>{item.infoCard.button.label}</Link>
              </div>
            </div>
            : null}
        </div>)}
    </div>
  )
}

function Mobile({ data }) {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.customMenu}`}>
      {data.map((item, key) =>
        <div className={`${handles.menuItemContainer} ${handles["menuItemContainer" + key]}`} key={key}>
          
          <Link to={item?.link}>{item?.label}</Link>
          {item.hasChildren ?
            <div className={`${handles.customSubMenuWrapper}`}>
              <div className={`${handles.customMenuContainer}`}>
                {item?.children?.map((department, key) =>
                  <div className={`${handles.departmentItem}`}>
                    <h2>
                      <Link to={department?.departmentLink}>{department?.departmentLabel}</Link>
                      <span>{department?.aditionalInfo}</span>
                    </h2>
                    <div className={`${handles.categoriesContainer}`}>
                      {department?.categories.map(category =>
                        <div className={`${handles.categoryItem}`}>
                          <strong>{category?.typeItems}</strong>
                          {category?.items.map(item =>
                            <Link to={item?.link}>{item?.label}</Link>)}
                        </div>)}
                    </div>
                  </div>)}
              </div>
            </div>
            : null}
        </div>)}
    </div>
  )
}

function CustomMenu({ data }) {
  const { isMobile } = useDevice()

  useEffect(() => { }, [data])
  if (!data) return null
  return (
    <>
      {isMobile ?
        <Mobile data={data} />
        :
        <Desktop data={data} />}
    </>
  )
}

export default CustomMenu
