import React from 'react';
import ViewGroup from '../../../components/ViewGroup/ViewGroup';
import drawing_overview from '../../../assets/img/drawing/drawing_overview.jpg';
import './drawingOverView.scss';
export default function DrawingOverView() {
    return (
        <div className="drawing-overview --relics">
            <h2>Di tích lịch sử Địa đạo Củ Chi</h2>
            <div className="container">
                <div className="drawing-overview__view --view">
                    <ViewGroup content='Xem chi tiết' />
                    <ViewGroup content='Xem bản vẽ kĩ thuật' />
                </div>
                <div className="drawing-overview__img">
                    <img src={drawing_overview} alt="drawing image" />
                </div>
            </div>
        </div>
    );
}
