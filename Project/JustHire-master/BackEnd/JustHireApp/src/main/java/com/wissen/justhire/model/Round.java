package com.wissen.justhire.model;

import java.io.Serializable;
import javax.persistence.*;



/**
 * The persistent class for the rounds database table.
 * 
 */
@Entity
@Table(name = "rounds")
@NamedQuery(name = "Round.findAll", query = "SELECT r FROM Round r")
public class Round implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "round_number")
	private int roundNumber;

	public Round() {
	}

	public int getRoundNumber() {
		return this.roundNumber;
	}

	public void setRoundNumber(int roundNumber) {
		this.roundNumber = roundNumber;
	}

}