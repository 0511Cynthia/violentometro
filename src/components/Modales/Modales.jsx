import React from "react";
import { Modal, Button } from "react-bootstrap";
import Lose from "../Lose/lose";
import closeIcon from "../../img/goHome.png";
import agreeIcon from "../../img/tryAgain.png";
import styles from "./Modal.module.css";

export default function BootstrapModal({ open, onClose}) {
  return (
    <Modal show={open} centered className={styles.content}>
      <Modal.Body className={styles.ImgContent}>
        <Lose />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose} className={styles.btn1}>
          <img src={closeIcon} alt="Cerrar" className={styles.icon} />
        </Button>
        <Button variant="primary" onClick={onClose} className={styles.btn2}>
          <img
            src={agreeIcon}
            alt="Intentar de nuevo"
            className={styles.icon}
          />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}