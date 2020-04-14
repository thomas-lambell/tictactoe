import React, {useEffect, useState} from 'react';
import _ from 'lodash';

enum TicTacToeValue{ X = 'X' , O = 'O' , undefined = '' }

export default function TicTacToe() {
	const[ticTacToeValues, setTicTacToeValues] = useState<Array<TicTacToeValue>>([]);
	const[playerValue, setNextPlayerValue] = useState<TicTacToeValue>(TicTacToeValue.X);
	
	useEffect(() => {
		setEmptyState()
	}, []);
	
	const setEmptyState = () => {
		let state: Array<TicTacToeValue> = [];
		_.range(9).map(_=>state.push(TicTacToeValue.undefined));
		setTicTacToeValues(state);
	};
	
	const onClickTicTacToeTile = (index: number) => {
		if (ticTacToeValues[index] != TicTacToeValue.undefined) return;
		let playState = ticTacToeValues;
		playState[index] = playerValue;
		setTicTacToeValues(playState);
		setNextPlayerValue(playerValue === TicTacToeValue.X ? TicTacToeValue.O : TicTacToeValue.X);
	};
	
	return (
		<>
			<h2>Tic-Tac-Toe</h2>
			<div className={'ticTacToe-game'}>
				{ticTacToeValues.map((ticTacToeValue, index) => {
					return (
						<div key={index} className={'toe-square'} onClick={() => onClickTicTacToeTile(index)}>
							<div>{ticTacToeValue ? ticTacToeValue : null}</div>
						</div>
					)
				})}
			</div>
			<button onClick={() => setEmptyState()}>Reset</button>
		</>
	);
}