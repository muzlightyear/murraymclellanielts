import React from 'react';
import { supabase } from './supabaseClient';
import './App.css'

function IELTSSpeaking() {

    const { data } = supabase
    .storage
    .from('murraymclellanielts-resources/speaking-tests')
    .getPublicUrl('ielts-speaking-test-speaking-test-1.pdf')
    const pdfUrl = data.publicUrl;

    return (
        <div className="ieltsspeaking-container">
            <a className="test-heading" >IELTS Speaking Sample Test 1</a>
            <iframe src={pdfUrl} width="100%" height="600px" />
            <a className="test-heading">IELTS Speaking Sample Test 2</a>
        </div>
    )
}
export default IELTSSpeaking