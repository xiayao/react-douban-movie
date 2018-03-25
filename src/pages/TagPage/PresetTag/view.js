import React from 'react'
import style from './style.scss'
import { Link } from 'react-router-dom'

const PresetTags = (props) => {
  let presetTags = [
    '电影', '电视剧', '综艺', '动画', '纪录片', '短片',
    '剧情', '爱情', '喜剧', '科幻', '动作', '悬疑', '犯罪',
    '恐怖', '青春', '励志', '战争', '文艺', '黑色幽默', '传记',
    '情色', '暴力', '音乐', '家庭', '大陆', '美国', '香港', '台湾',
    '日本', '韩国', '英国', '法国', '德国', '意大利', '西班牙',
    '印度', '泰国', '俄罗斯', '伊朗', '加拿大', '澳大利亚', '爱尔兰',
    '瑞典', '巴西', '丹麦', '经典冷门', '佳片', '魔幻', '黑帮', '女性', '自定义标签'
  ]
  return (
    <div className={style.presestTagWrapper}>
      <p className={style.title}>选影视</p>
      {presetTags.map(tag => {
        return <Link to="" className={style.tag} key={tag}>{tag}</Link>
      })}
    </div>
  )
}

export default PresetTags