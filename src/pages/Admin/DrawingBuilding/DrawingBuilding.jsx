import React from 'react';
import ViewGroup from '../../../components/ViewGroup/ViewGroup';
import drawing_building1 from '../../../assets/img/drawing/drawing_building1.jpg';
import drawing_building2 from '../../../assets/img/drawing/drawing_building2.jpg';
import './drawingBuilding.scss';

export default function DrawingBuilding() {
    return (
        <div className="drawing-building">
            <div className="container">
                <div className="drawing-building__view">
                    <ViewGroup content='Xem chi tiết' />
                    <ViewGroup content='Xem bản đồ khoanh vùng' />
                </div>
                <div className="drawing-building__img">
                    <img src={drawing_building1} alt="drawing image" />
                </div>
                <div className="drawing-building__img">
                    <img src={drawing_building2} alt="drawing image" />
                </div>
            </div>
        </div>
    );
}
