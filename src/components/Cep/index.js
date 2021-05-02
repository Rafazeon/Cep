import React, { useState } from "react";
import * as M from "@material-ui/core";
import * as S from "./styled";

import { getCep } from "../../actions/cep"

import InputMask from "react-input-mask";

// M.Grid container
// M.Grid item xs = smartphone lg = Desktop md = Tablet sm = Mini Tablet

function Cep() {
  const [field, setField] = useState({});

  const handleChange = (name) => async(event) => {
    if(name === 'cep') {
       const unmask = event.target.value.replace(/[^a-z\d\s]+/gi, "");
       
       if(unmask.length === 8) {
          const result = await getCep(unmask)

          const newData = {cidade: result.localidade, rua: result.logradouro, cep: result.cep, bairro: result.bairro, uf: result.uf}

          setField({...newData})
       }
    }

    setField({ ...field, [name]: event.target.value })
  };

  return (
    <S.Card>
      <S.Container container>
        <InputMask
          placeholder="Cep"
          mask="99999-999"
          onChange={handleChange('cep')}
          value={field.cep}
        >
          {(inputProps) => (
            <M.TextField
              {...inputProps}
              margin="normal"
              required
              fullWidth
            />
          )}
        </InputMask>

        
        <S.Content item xs={12} lg={12} md={12} sm={12}>
          <M.TextField value={field.rua} fullWidth placeholder="Rua" onChange={handleChange('rua')} />
        </S.Content>
        <S.Content item xs={12} lg={12} md={12} sm={12}>
          <M.TextField
            fullWidth
            placeholder="Bairro"
            onChange={handleChange('bairro')}
            value={field.bairro}
          />
        </S.Content>
        <S.Content item xs={12} lg={6} md={6} sm={12}>
          <M.TextField value={field.cidade} fullWidth placeholder="Cidade" onChange={handleChange('cidade')} />
        </S.Content>
        <S.Content item xs={12} lg={6} md={6} sm={12}>
          <M.TextField value={field.uf} fullWidth placeholder="Estado" onChange={handleChange('uf')} />
        </S.Content>
      </S.Container>
    </S.Card>
  );
}

export default Cep;
