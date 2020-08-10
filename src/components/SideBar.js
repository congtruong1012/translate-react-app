import React from 'react'
import { Select } from 'antd';


const SideBar = () => {
   const { Option } = Select;
   function onChange(value) {
      console.log(`selected ${value}`);
   }

   function onSearch(val) {
      console.log('search:', val);
   }
   return (
      <Select
         showSearch
         style={{ width: 200 }}
         placeholder="Select a person"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
         }
      >
         <Option value="Newsfeed">Newsfeed</Option>
         <Option value="Business">Business</Option>
         <Option value="Backend">Backend</Option>
      </Select>
   )
}

export default SideBar
