import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'

const CreateLoadClear = () => {
  return (
    <>
    <div className='d-flex justify-content-end'>
    <ButtonGroup className='btn-group'>
        <Button
        outline
        id='createButton'
        color='primary'
        >
            Create
        </Button>
        <Button
        outline
        id='loadButton'
        color='warning'>
            Load
        </Button>
        <Button
        id='clearButton'
        color='danger'>
            Clear
        </Button>
    </ButtonGroup>
    </div>
    </>
  )
}

export default CreateLoadClear