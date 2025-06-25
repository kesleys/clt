// src/components/OfficeScene.js

import React from 'react';
import styles from './OfficeScene.module.css'; // Importa os estilos usando CSS Modules

const OfficeScene = () => {
    return (
        <div className={styles.officeScene}>
            {/* GRANDE SALÃO DE TRABALHO - Corpo Central do 'H' */}
            <div className={`${styles.area} ${styles.mainHall}`}>
                <div className={styles.floor}></div> {/* Chão do salão */}

                {/* Estações de Trabalho (Cubículos) - Grid 3x3 */}
                {/* Linha 1 */}
                <div className={styles.desk} style={{ top: '30px', left: '30px' }}>
                    <div className={styles.computer} style={{ top: '5px', left: '25px' }}><div className={styles.computerScreen}></div></div>
                    <div className={styles.chair} style={{ top: '55px', left: '30px' }}><div className={styles.chairBack}></div></div>
                    <div className={styles.paper} style={{ top: '15px', left: '10px' }}></div>
                </div>
                <div className={styles.desk} style={{ top: '30px', left: '150px' }}>
                    <div className={styles.computer} style={{ top: '5px', left: '25px' }}><div className={styles.computerScreen}></div></div>
                    <div className={styles.chair} style={{ top: '55px', left: '30px' }}><div className={styles.chairBack}></div></div>
                </div>
                <div className={`${styles.desk} ${styles.playerDesk}`} style={{ top: '30px', left: '270px' }} data-role="player-desk">
                    <div className={styles.computer} style={{ top: '5px', left: '25px' }}><div className={styles.computerScreen}></div></div>
                    <div className={styles.chair} style={{ top: '55px', left: '30px' }}><div className={styles.chairBack}></div></div>
                    <div className={styles.paper} style={{ top: '30px', left: '50px' }}></div>
                </div>
                <div className={styles.desk} style={{ top: '30px', left: '390px' }}>
                    <div className={styles.computer} style={{ top: '5px', left: '25px' }}><div className={styles.computerScreen}></div></div>
                    <div className={styles.chair} style={{ top: '55px', left: '30px' }}><div className={styles.chairBack}></div></div>
                </div>

                {/* Linha 2 (Com NPCs e lixeiras) */}
                <div className={styles.desk} style={{ top: '150px', left: '30px' }}>
                    <div className={styles.computer} style={{ top: '5px', left: '25px' }}><div className={styles.computerScreen}></div></div>
                    <div className={styles.npcPlaceholder} style={{ top: '55px', left: '30px' }}><div className={styles.npcHead}></div></div>
                </div>
                <div className={styles.trashCan} style={{ top: '180px', left: '120px' }}></div>
                <div className={styles.desk} style={{ top: '150px', left: '270px' }}>
                    <div className={styles.computer} style={{ top: '5px', left: '25px' }}><div className={styles.computerScreen}></div></div>
                    <div className={styles.npcPlaceholder} style={{ top: '55px', left: '30px' }}><div className={styles.npcHead}></div></div>
                    <div className={styles.paper} style={{ top: '10px', left: '60px' }}></div>
                </div>
                <div className={styles.desk} style={{ top: '150px', left: '390px' }}>
                    <div className={styles.computer} style={{ top: '5px', left: '25px' }}><div className={styles.computerScreen}></div></div>
                    <div className={styles.chair} style={{ top: '55px', left: '30px' }}><div className={styles.chairBack}></div></div>
                </div>

                {/* Linha 3 (Plantas e Impressoras) */}
                <div className={styles.desk} style={{ top: '270px', left: '30px' }}>
                    <div className={styles.computer} style={{ top: '5px', left: '25px' }}><div className={styles.computerScreen}></div></div>
                    <div className={styles.chair} style={{ top: '55px', left: '30px' }}><div className={styles.chairBack}></div></div>
                </div>
                <div className={styles.plantPot} style={{ top: '300px', left: '120px' }}>
                    <div className={styles.plantLeaves}></div>
                </div>
                <div className={styles.desk} style={{ top: '270px', left: '270px' }}>
                    <div className={styles.computer} style={{ top: '5px', left: '25px' }}><div className={styles.computerScreen}></div></div>
                    <div className={styles.npcPlaceholder} style={{ top: '55px', left: '30px' }}><div className={styles.npcHead}></div></div>
                </div>
                <div className={styles.printer} style={{ top: '300px', left: '380px' }}>
                    <div className={styles.printerScreen}></div>
                </div>

                {/* Corredores Centrais (garantido pelo espaçamento das mesas) */}
                {/* Bebedouro */}
                <div className={styles.waterCooler} style={{ top: '200px', left: '500px' }}></div>
                <div className={styles.waterCooler} style={{ top: '200px', right: '50px' }}></div>

                {/* Iluminação */}
                <div className={styles.lightFixture} style={{ top: '20px', left: '100px', width: '150px', height: '15px' }}></div>
                <div className={styles.lightFixture} style={{ top: '20px', left: '400px', width: '150px', height: '15px' }}></div>
                <div className={styles.lightFixture} style={{ top: '20px', left: '700px', width: '150px', height: '15px' }}></div>
                <div className={styles.lightFixture} style={{ top: '450px', left: '100px', width: '150px', height: '15px' }}></div>
                <div className={styles.lightFixture} style={{ top: '450px', left: '400px', width: '150px', height: '15px' }}></div>
                <div className={styles.lightFixture} style={{ top: '450px', left: '700px', width: '150px', height: '15px' }}></div>

            </div>

            {/* COPA - Anexo Lateral Esquerdo (Superior) */}
            <div className={`${styles.area} ${styles.copa}`}>
                <div className={styles.floor}></div>
                <div className={styles.coffeeMachine} style={{ top: '30px', left: '10px' }} data-role="coffee-machine"></div>
                <div className={styles.counter} style={{ top: '30px', left: '5px', width: '80px', height: '20px' }}></div>
                <div className={styles.cup} style={{ top: '10px', left: '50px' }}></div>
                <div className={styles.sugarPot} style={{ top: '12px', left: '65px' }}></div>
                <div className={styles.fridge} style={{ top: '70px', left: '10px' }}>
                    <div className={styles.fridgeHandle}></div>
                </div>
                <div className={styles.sink} style={{ top: '120px', left: '10px' }}>
                    <div className={styles.faucet}></div>
                </div>
                {/* Abertura para o salão principal */}
                <div className={styles.lightFixture} style={{ top: '10px', left: '30px', width: '40px', height: '10px' }}></div>
            </div>

            {/* BANHEIRO - Anexo Lateral Esquerdo (Inferior) */}
            <div className={`${styles.area} ${styles.bathroom}`}>
                <div className={styles.floor}></div>
                <div className={styles.door} style={{ top: '100px', left: '-5px', height: '60px' }}></div> {/* Porta de entrada */}
                <div className={styles.toiletCubicle} style={{ top: '20px', left: '10px' }}>
                    <div className={styles.toiletDoor}></div>
                </div>
                <div className={styles.toiletCubicle} style={{ top: '20px', left: '55px' }}>
                    <div className={styles.toiletDoor}></div>
                </div>
                <div className={styles.sink} style={{ top: '100px', left: '10px', width: '30px' }}>
                    <div className={styles.faucet}></div>
                </div>
                <div className={styles.sink} style={{ top: '100px', left: '55px', width: '30px' }}>
                    <div className={styles.faucet}></div>
                </div>
                <div className={styles.mirror} style={{ top: '65px', left: '10px', width: '75px' }}></div>
                <div className={styles.soapDispenser} style={{ top: '80px', left: '20px' }}></div>
                {/* Abertura para o salão principal */}
                <div className={styles.lightFixture} style={{ top: '10px', left: '30px', width: '40px', height: '10px' }}></div>
            </div>

            {/* SALA DO CHEFE - Anexo Lateral Direito (Superior) */}
            <div className={`${styles.area} ${styles.bossOffice}`}>
                <div className={styles.floor}></div>
                <div className={styles.door} style={{ top: '100px', right: '-5px', height: '60px' }} data-role="boss-office-entrance"></div> {/* Porta de entrada */}
                <div className={styles.bossDesk} style={{ top: '30px', left: '0px' }}></div>
                <div className={styles.executiveChair} style={{ top: '80px', left: '35px' }}>
                    <div className={styles.executiveChairBack}></div>
                </div>
                <div className={styles.bookshelf} style={{ top: '10px', left: '5px' }}>
                    <div className={styles.book} style={{ top: '5px', backgroundColor: 'var(--color-book-red)' }}></div>
                    <div className={styles.book} style={{ top: '15px', backgroundColor: 'var(--color-book-blue)' }}></div>
                    <div className={styles.book} style={{ top: '25px', backgroundColor: 'var(--color-book-green)' }}></div>
                </div>
                <div className={styles.window} style={{ top: '10px', left: '30px' }}>
                    <div className={styles.building} style={{ bottom: '0px', left: '5px' }}></div>
                    <div className={styles.building} style={{ bottom: '0px', right: '5px', height: '20px' }}></div>
                </div>
                {/* Campo de Visão do Chefe (Placeholder Dinâmico) */}
                <div className={styles.bossVisionArea} style={{ top: '120px', left: '-50px', width: '150px', height: '80px' }} data-role="boss-vision-area"></div>
                <div className={styles.lightFixture} style={{ top: '10px', left: '30px', width: '40px', height: '10px' }}></div>
            </div>

            {/* SALA DE REUNIÕES - Anexo Lateral Direito (Inferior) */}
            <div className={`${styles.area} ${styles.meetingRoom}`}>
                <div className={styles.floor}></div>
                <div className={styles.door} style={{ top: '100px', right: '-5px', height: '60px' }}></div> {/* Porta de entrada */}
                <div className={styles.meetingTable} style={{ top: '50px', left: '10px' }} data-role="meeting-table"></div>
                <div className={styles.chair} style={{ top: '40px', left: '0px' }}><div className={styles.chairBack}></div></div>
                <div className={styles.chair} style={{ top: '40px', left: '60px' }}><div className={styles.chairBack}></div></div>
                <div className={styles.chair} style={{ top: '100px', left: '0px' }}><div className={styles.chairBack}></div></div>
                <div className={styles.chair} style={{ top: '100px', left: '60px' }}><div className={styles.chairBack}></div></div>
                <div className={styles.projector} style={{ top: '10px', left: '35px' }}></div>
                <div className={styles.projectorScreen} style={{ top: '20px', left: '10px' }}></div>
                <div className={styles.lightFixture} style={{ top: '10px', left: '30px', width: '40px', height: '10px' }}></div>
            </div>
        </div>
    );
};

export default OfficeScene;

