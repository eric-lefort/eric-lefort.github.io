---
layout: page
title: Atomic Chess AI
description:
img: assets/img/atomic-ai/atomic_chess_cropped.png
importance: 2
category: learning
---

Chess-playing artificial intelligence has existed since the 1990s with the development of Deep Blue at IBM, the supercomputer system that went on to defeat Garry Kasparov, the then-world champion, in 1997. We focus on chess engines implemented purely in software, which work in a very similar manner to Deep Blue and other early computer systems designed for this purpose.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/atomic-ai/atomic_chess.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    In atomic chess, a capture triggers the immediate capture of the capturing piece as well as all non-pawn pieces within a 3x3 box centered on the capture.
</div>

This was a project I completed in my 3rd year of University for a group project in our course on applications of deep learning. (APS360)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/atomic-ai/Overview.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Graphic overview of the algorithm</div>

The objective of our project was to create an artificial intelligence system that is capable of playing the chess variant Atomic Chess. We focused on the heuristic or evaluation function, which, given a board position, will evaluate the strength of the board position, from the perspective of "white". The model was a deep convolutional neural network, which takes as input a vector representation of a chess board and returns a value between 0 and 1, with values closer to 1 indicating stronger positions for white and values closer to 0 indicating stronger positions for black.

I modified an open-source C project ([Tom Kerrigan's Simple Chess program](http://www.tckerrigan.com/Chess/TSCP/)) using C++ and the ONNX runtime to replace the evaluation function with that from our trained model. The model itself used a multichannel bitmap representation of the chess board as input, based on work from the following paper: [https://arxiv.org/abs/1908.06660](https://arxiv.org/abs/1908.06660).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/atomic-ai/atomic-ai-search.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Illustration of search mechanism</div>

We collected 900,000 games from the [lichess variant database](https://database.lichess.org/#variant_games). We transform each board so that the current player is at the bottom (white). Since chess is a zero-sum game, flipping the board should just yield the negative of the evaluation in the non-flipped board. The chess pieces of both players are then transformed into a 17-channel binary map of size 8x8 using the python-chess library, which encodes the position of all pieces.

Our model performs well given the difficulty of the problem at hand, getting a classification accuracy of 0.625 with a BCE loss of 0.349 on the validation set. We compared our model to a baseline, which was a hard-coded heuristic accounting for:

- Material value (piece value count)
- Mobility score (number of legal moves available)
- King safety (closeness of friendly pieces to enemy king, and vice-versa)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/atomic-ai/modelres.PNG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Our results are significantly better than the ones obtained with the baseline model.</div>

Overall, our model is performing fairly well. It has some strong points and some limitations. We have also identified many improvements that could be made to improve the AI, some of which are directly related to deep learning, and some which are not.

## Takeaways

One of the main things that we learned from our results is that the implementation of the search engine surrounding the evaluation function network is highly important to the performance of a chess AI. This means that to develop a fast AI that performs at a very high level, we need to spend considerable time optimizing search, and ensuring that our model can perform inference in a very short amount of time.

### Memoryless Model

Being a straightforward CNN, our model has no ability to gain insights from sequences of board states. While this is not generally a problem, there exist a few edge cases where it is important to consider sequence dependency. These are the threefold repetition and mate-in-50 rules. These rules allow a game of chess to end in a draw under certain conditions, such as the same board position being reached three times in a game or a checkmate being unable to be reached in under 50 moves with one side having only their king remaining. While these conditions are rare, it is important to address them. We propose having a hard-coded rule which modifies the evaluation function when these conditions are met.

### Prioritizing Important Positions and Parts of the Board

When playing chess, human players are able to quickly identify the most critical parts of a chess board. An expert would spend little time thinking about board features and moves which are unlikely to produce advantageous results. This prioritization is not captured by our model. It would be interesting to explore the performance of a model which used attention, for instance, a transformer-based model, in this application.

### Training Time

Another result that was not expected was the amount of time required to adequately train our model. Given the complexity of our model, which was similar to or less than that in other engines we researched, it took many hours (up to eight hours, depending on hyperparameters) to train our model each time we modified it, when training on local hardware (Nvidia GTX 1070). If a similar project were to be completed with strict time constraints, we would recommend considering using a cloud compute service to train the model.

For more details, see the full project report [here]({{ site.baseurl }}/assets/pdf/APS360_Final_Report.pdf).
