import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { Tabs } from 'antd';
import { Table } from 'antd';
import date_svg from '../../../assets/img/Date.svg';
import vector_svg from '../../../assets/img/Vector.svg';
import shape_svg from '../../../assets/img/Shape.svg';

import './payroll.scss';
const { TabPane } = Tabs;
export default function Payroll() {
    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            key: 'stt',
            render: (text) => <a>{text}</a>,
            width: 60,
            height: 68,
        },
        {
            title: 'Họ và tên',
            dataIndex: 'họ và tên',
            key: 'họ và tên',
            width: 120,
        },
        {
            title: 'Chức vụ',
            dataIndex: 'chức vụ',
            key: 'chức vụ',
            ellipsis: true,
        },
        {
            title: 'Lương cơ bản',
            dataIndex: 'lương cơ bản',
            key: 'lương cơ bản',
            ellipsis: true,
        },
        {
            title: 'Lương theo năng lực',
            dataIndex: 'lương theo năng lực',
            key: 'lương theo năng lực',
            ellipsis: true,
        },
        {
            title: 'Phụ cấp',
            dataIndex: 'phụ cấp',
            key: 'phụ cấp',
            ellipsis: true,
        },
        {
            title: 'Ngày công',
            dataIndex: 'ngày công',
            key: 'ngày công',
            ellipsis: true,
        },
        {
            title: 'Tổng thu nhập',
            dataIndex: 'tổng thu nhập',
            key: 'tổng thu nhập',
            ellipsis: true,
        },
        {
            title: 'Chi tiết',
            dataIndex: 'chi tiết',
            key: 'chi tiết',
            ellipsis: true,
        },
    ];
    const data = [
        {
            key: '1',
            stt: 1,
            age: 32,
            address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park, London No. 2 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const [visible, setVisible] = useState(false);

    const handleMenuClick = (e) => {
    };

    const handleVisibleChange = (flag) => {
        setVisible(flag);
    };
    const onChange = (key) => {
        console.log(key);
    };
    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Lâm Thiếu Kỳ',
                    key: '1',
                },
                {
                    label: 'Nguyễn Quang',
                    key: '2',
                },
                {
                    label: 'Phan Anh',
                    key: '3',
                },
            ]}
        />
    );
    return (
        <div className='payroll'>
            <div className="container">
                <h2>Bảng thanh toán lương</h2>
                <div className="payroll__filter">
                    <div className="payroll__filter--wrapper">
                        <p>Lương của</p>
                        <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                            <a onClick={(e) => e.preventDefault()}>
                                <span>Tất cả</span>
                                <img src={vector_svg} alt="vecto" />
                            </a>
                        </Dropdown>
                    </div>
                    <div className="payroll__filter--wrapper">
                        <p>Tháng 7</p>
                        <div className="date">
                            <div className="date__group">
                                <p className='start'>29/06/2022</p>
                                <span>-</span>
                                <p className='end'>29/07/2022</p>
                            </div>
                            <div className="icon">
                                <img src={date_svg} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="payroll__tabs">
                    <div className="container">
                        <Tabs defaultActiveKey="1" onChange={onChange}>
                            <TabPane tab="Chi tiết" key="1">
                                <div className="payroll__tabs--total">
                                    <div className="left">
                                        <div className="title">Tổng chi lương tháng 7</div>
                                        <div className="money">
                                            <div className="number">217.050.632 VND</div>
                                            <div className="percent">
                                                <p>+2.5%</p>
                                                <img src={shape_svg} alt="shape"></img>
                                            </div>
                                        </div>
                                        <p className='compare'>
                                            So với (195.294.504 VND tháng 6)
                                        </p>
                                    </div>
                                    <div className="right">
                                        <div className="title">Tổng chi lương năm 2021</div>
                                        <div className="money">
                                            <div className="number">1.217.050.632 VND</div>
                                            <div className="percent"><p>+2.5%</p>
                                                <img src={shape_svg} alt="shape"></img>
                                            </div>
                                        </div>
                                        <p className='compare'>
                                            So với (195.294.504 VND tháng 6)
                                        </p>
                                    </div>
                                </div>
                                <div className="payroll__tabs--table">
                                    <Table columns={columns} dataSource={data} />
                                </div>
                            </TabPane>
                            <TabPane tab="Lịch sử thanh toán lương" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Nghiệp vụ" key="4">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Tiền chuyển đến" key="5">
                                Content of Tab Pane 4
                            </TabPane>
                            <TabPane tab="Tiền chuyển đi" key="6">
                                Content of Tab Pane 5
                            </TabPane>
                        </Tabs>
                    </div>
                </div>

            </div>
        </div>
    );
}
