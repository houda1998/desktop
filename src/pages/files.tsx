import React, { useState } from "react";
import FileList from "../components/File"
import { Form, Modal, Menu, Breadcrumb, Card, Col, Row, Input, Button } from 'antd';

import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import MaterialList from "../components/File";

function FilesList() {

  return (
    <Layout>
    <MaterialList/>
  </Layout>
)

}

export default FilesList;