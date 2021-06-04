import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormControl,
    CInputGroup,
    CInputGroupText,
    CRow,
    CCardImage
} from '@coreui/react'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Containerlogin = () => {
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                    <CCardImage className="mb-4"src="/images/logo.png"></CCardImage>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                            <FontAwesomeIcon icon={faUser} />
                        </CInputGroupText>
                        <CFormControl placeholder="Username" autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                            <FontAwesomeIcon icon={faLock} />
                        </CInputGroupText>
                        <CFormControl
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton color="success" className="mainColor px-4">
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white mainColor py-5" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      < >
                        <CButton color="light" className="mt-3" active tabIndex={-1}>
                          Register Now!
                        </CButton>
                      </>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
export default Containerlogin
